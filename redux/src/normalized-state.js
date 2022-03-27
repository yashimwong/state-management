import { schema, normalize } from "normalizr";
import default_state from "./default.json";

const user = new schema.Entity("users");
const card = new schema.Entity("cards", { assignedTo: user });
const list = new schema.Entity("lists", {
    cards: [card],
});

const normalized_lists = normalize(default_state.lists, [list]);
const normalized_users = normalize(default_state.users, [user]);

export const lists = {
    entities: normalized_lists.entities.list,
    ids: normalized_lists.result,
};

export const users = {
    entities: normalized_users.entities.users,
    ids: normalized_users.result,
};

export const cards = {
    entities: normalized_lists.entities.cards,
    ids: Object.keys(normalized_lists.entities.cards),
};

export default {
    lists,
    users,
    cards,
};
