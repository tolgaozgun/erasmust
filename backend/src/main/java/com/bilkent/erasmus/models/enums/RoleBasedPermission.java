package com.bilkent.erasmus.models.enums;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;
import java.util.Set;
import java.util.stream.Collectors;

import static com.bilkent.erasmus.models.enums.Permission.*;

public enum RoleBasedPermission {

    ROLE_USER(Sets.newHashSet(), "USER"),
    ROLE_ADMIN(Sets.newHashSet(USER_READ, USER_WRITE, ADMIN_READ, ADMIN_WRITE), "ADMIN"),

    ROLE_STUDENT(Sets.newHashSet(USER_READ), "STUDENT"),

    ROLE_READER(Sets.newHashSet(USER_READ, ADMIN_READ), "READER");


    // STUDENT, EXCHANGE_COORDINATOR, ADMIN, DEAN


    private final Set<Permission> permissions;

    private final String roleName;

    RoleBasedPermission(Set<Permission> permissions, String roleName) {
        this.permissions = permissions;
        this.roleName = roleName;
    }

    public Set<Permission> getPermissions() {
        return permissions;
    }

    public String getRoleName() {
        return roleName;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority(this.name()));
        return permissions;
    }


}