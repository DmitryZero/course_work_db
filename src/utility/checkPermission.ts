import { TElement } from "@/interfaces/TElement";
import { TUser } from "@/interfaces/TUser";

export default function checkPermission(current_user: TUser, groups_to_check) {
    if (current_user.is_admin) return true;

    if (element.)

    if (!current_user?.is_admin && !(element.permissions.read && (current_user_groups || []).some(g => g.id === element.permissions.read?.id))) return null;

    return false;
}