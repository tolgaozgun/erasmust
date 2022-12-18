package com.bilkent.erasmus.enums;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;
import java.util.Set;
import java.util.stream.Collectors;

public enum RoleBasedPermission {

    ROLE_USER(Sets.newHashSet(), "USER"),
    ROLE_ADMIN(Sets.newHashSet(Permission.USER_READ, Permission.USER_WRITE, Permission.ADMIN_READ, Permission.ADMIN_WRITE), "ADMIN"),

    ROLE_STUDENT(Sets.newHashSet(Permission.USER_READ), "STUDENT"),

    ROLE_READER(Sets.newHashSet(Permission.USER_READ, Permission.ADMIN_READ), "READER"),

    ROLE_ERASMUS_COORDINATOR(Sets.newHashSet(Permission.ADMIN_READ), "ERASMUS_COORDINATOR"),

    ROLE_COURSE_COORDINATOR(Sets.newHashSet(Permission.ADMIN_READ), "COURSE_COORDINATOR"),

    ROLE_DEAN(Sets.newHashSet(Permission.ADMIN_READ),"DEAN");



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