// This will store the roles and permissions
// export const permissions = {
//     user: ["create", "read", "update", "delete"],
//     admin: ["create", "read", "update", "delete", "admin"],
//     superAdmin: ["create", "read", "update", "delete", "admin", "superAdmin"],
// }

// Alternatively we can use roles

export const permissions = [
    {
        role: "user",
        actions: [
            "get_profile",
            "update_profile",
            "add_todo",
            "update_todo",
            "get_todo",
        ]
    },
    {
        role: "admin",
        actions: [
            "get_profile",
            "update_profile",
            "add_todo",
            "update_todo",
            "get_todos",
            "delete_todo",
        ]
    },
    {
        role: "superAdmin",
        actions: [
            "get_profile",
            "update_profile",
            "add_todo",
            "update_todo",
            "get_todos",
            "delete_todo",
            "delete_user",
            "update_user_role",
        ]
    }
]