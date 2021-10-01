interface User {
    id?: number | undefined;
    name?: string | undefined;
}

interface MenuItem {
    path: string;
    title: string;
}

interface Album {
    id?: number;
    title?: string;
    userId?: number;
}

interface Post {
    id?: number;
    title?: string;
    body?: string;
    userId?: number;
}

interface ToDo {
    id?: number;
    title?: string;
    completed?: boolean;
    userId?: number;
}
