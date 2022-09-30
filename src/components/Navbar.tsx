import {Menu, Container,Button} from "semantic-ui-react";
import Image from 'next/image';
import {useRouter} from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <Menu attached style={{
            padding: '1rem'
        }}>
            <Container>
                <Menu.Item onClick={()=> router.push('/')}>
                    <Image
                        width={40}
                        height={40}
                        src="https://fmontes.com/images/_logos/nextjs.svg"/>
                </Menu.Item>
            </Container>
            <Menu.Menu>
                <Menu.Item>
                     <Button basic color='teal' onClick={()=> router.push("/tasks/new") }>new task</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}