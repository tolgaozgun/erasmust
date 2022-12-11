package com.bilkent.erasmus.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserDetailsServiceImpl userDetailsServiceImpl;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwtToken = extractJwtFromRequest(request);
            log.info("do filter jwt: " + jwtToken);
            if (StringUtils.hasText(jwtToken) && !jwtTokenProvider.validateToken(jwtToken)) {
                log.info("do filter");
                Integer id = jwtTokenProvider.getUserIdFromJwt(jwtToken);
                log.info("user id: " + jwtToken);
                UserDetails userDetails = userDetailsServiceImpl.loadByUserId(id);
                if (userDetails != null) {
                    log.info("user details");
                    UsernamePasswordAuthenticationToken authenticationToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }
        }
        catch (Exception e) {
            return;
        }
        filterChain.doFilter(request,response);
    }

    private String extractJwtFromRequest(HttpServletRequest request) {
        String bearer = request.getHeader("Authorization");
        log.info("extraction");
        if (StringUtils.hasText(bearer) && bearer.startsWith("Bearer ")) {
            log.info(bearer);
            return bearer.substring(("Bearer".length() + 1) * 2);
        }
        else {
            return null;
        }
    }
}
