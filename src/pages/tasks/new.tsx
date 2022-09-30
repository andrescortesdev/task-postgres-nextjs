import {Button, Card, Form, Icon} from "semantic-ui-react";
import {ChangeEvent, FormEvent, useState} from "react";
import {Task} from "../../interfaces/Task";
import {useRouter} from "next/router";
import Layout from "src/components/Layout";

export default function newPage() {
    const router = useRouter();
    const [task, setTask] = useState({
        title: "",
        description: ""
    });
    const handleChange = ({
                              target: {name, value},
                          }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setTask({...task, [name]: value});

    const createTask = async (task: Task) => {
        await fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        });

    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await createTask(task);
            router.push("/");
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <Layout>
            <Card>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label htmlFor="">Title:</label>
                            <input type="text" placeholder="Write your title" name="title" onChange={handleChange}/>
                        </Form.Field>
                        <Form.Field>
                            <label htmlFor="">Description:</label>
                            <textarea name="description" placeholder="Write your description"
                                      onChange={handleChange}></textarea>
                        </Form.Field>
                        <Button on={handleSubmit}>
                            <Icon name="save outline"/> Save
                        </Button>
                    </Form>
                </Card.Content>
            </Card>
        </Layout>
    )
}