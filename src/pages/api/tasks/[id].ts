import {readSync} from "fs";
import {NextApiRequest, NextApiResponse} from "next"
import {conn} from "../../../utils/database"

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {method, query, body} = req;

    switch (method) {
        case 'GET':
            try {
                const q = "SELECT * FROM tasks WHERE id  = $1";
                const values = [query.id];
                const result = await conn.query(q, values);

                if (result.rows.length === 0) {
                    return res.status(400).json({message: "no hay naaa"});
                }
                return res.status(200).json(result.rows[0]);
            } catch (e: any) {
                return res.status(400).json({message: e.message});
            }

        case 'PUT':
            try {
                const q = "UPDATE tasks set title = $1, description = $2 WHERE id = $3";
                const values = [body.title, body.description, query.id];
                const result = await conn.query(q, values);
                if (result.rowCount === 0) {
                    return res.status(400).json({message: "no hay naaa pa actualizar"});
                }
                return res.status(200).json({message: "Actualizado Pa"});
            } catch (e: any) {
                return res.status(400).json({message: e.message})
            }
        case 'DELETE':
            try {
                const q = "DELETE FROM tasks WHERE id = $1";
                const values = [query.id];
                const result = await conn.query(q, values);
                if (result.rowCount === 0) {
                    return res.status(400).json({message: "no hay naaa pa eliminar"});
                }
                return res.status(200).json({message: "Elimnado con exito"});
            } catch (e: any) {
                return res.status(400).json({message: e.message});
            }
        default:
            return res.status(400).json('No method pa');

    }

}