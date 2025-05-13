import { database } from "@/lib/firebase";
import { ref, set } from "firebase/database";

const addShip = (code: string, name: string) => {
    const db = database;
    const created_at = new Date();
    const status = "Aktif";

    set(ref(db, "ships/" + code), {
        name,
        status,
        created_at,
    });
};

export { addShip };
