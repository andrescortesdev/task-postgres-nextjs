import Navbar from "./Navbar";
import {Container} from "semantic-ui-react";
import {JSXChild} from "@typescript-eslint/types/dist/generated/ast-spec";

export default function Layout({children}:{children:JSX.Element| JSX.Element[]} ){
    return(
        <div>
            <Navbar/>
            <Container style={{ paddingTop:"1rem"}}>
                {children}
            </Container>

        </div>
    )
}