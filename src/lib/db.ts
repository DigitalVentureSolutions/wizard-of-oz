import Dexie, { type EntityTable } from "dexie";

export interface UIState {
    key: string;
    value: unknown;
}

export const db = new Dexie("AppSettings") as Dexie & {
    ui: EntityTable<UIState, "key">;
};

db.version(1).stores({
    ui: "key"
});
