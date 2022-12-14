package com.bilkent.erasmus.security;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Date;
@Slf4j
@Component
public class JwtTokenProvider {
    private String APP_SECRET = "yeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahyayeahya";
    private long EXPIRES_IN = 604800L;

    public String generateJwtToken(Authentication auth) {
        JwtUserDetails userDetails = (JwtUserDetails) auth.getPrincipal();
        log.info("generate token --> " + userDetails.getId());
        Date expireDate = java.sql.Date.valueOf(LocalDate.now().plusDays(EXPIRES_IN));
        return Jwts.builder()
                .setSubject(Integer.toString(userDetails.getId()))
                .claim("username",((JwtUserDetails) auth.getPrincipal()).getUsername())
                .claim("id",((JwtUserDetails) auth.getPrincipal()).getId())
                .claim("authorities", (auth.getAuthorities()))
                .setIssuedAt(java.sql.Date.valueOf(LocalDate.now()))
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, APP_SECRET)
                .compact();
    }

    public String generateJwtTokenByUserId(Long userId) {
        Date expireDate = new Date(new Date().getTime() + EXPIRES_IN);
        return Jwts.builder().setSubject(Long.toString(userId))
                .setIssuedAt(new Date()).setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, APP_SECRET).compact();
    }
    Integer getUserIdFromJwt(String token) {
        Claims claims = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody();
        log.info("get user id from token");
        log.info(claims.getId());
        return Integer.parseInt(claims.getSubject());
    }

    boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJwt(token);
            return !isTokenExpired(token);
        } catch (SignatureException | MalformedJwtException | ExpiredJwtException | UnsupportedJwtException |
                 IllegalArgumentException e) {
            return false;
        }
    }

    boolean isTokenExpired(String token) {
        Date expired = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody().getExpiration();
        return expired.before(java.sql.Date.valueOf(LocalDate.now()));
    }

}
