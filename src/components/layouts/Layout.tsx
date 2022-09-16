import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Container } from "reactstrap";
import Meta from "../Meta";
import MobileNavbar from "../MobileNavbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
  <>
  <Meta/>
  <div className="layout">
          <Navbar/>
          <Container style={{border:"1px solid black" ,marginTop:5}}> 
            <main>{children}</main>
            <div style={{height:"1200px",backgroundColor:"yellow"}}>

            </div>
         </Container>
       <MobileNavbar/>
    </div>
  </>
  );
}
