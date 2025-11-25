export function useNotifications() {
    return {
        data: {
            summary: {
                critical_unread: 1,
                warning_unread: 2,
            },
        },
        isLoading: false,
        error: null,
    };
}
