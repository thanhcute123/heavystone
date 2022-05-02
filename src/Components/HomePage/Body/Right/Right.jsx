import React, { useState } from "react";

import Bottom_up from "./Bottom_up/Bottom_up";
import Notification from "./Notification/Notification";
import "../Right/Right.css";
import logo_message from "../../../../img/Logo/c9b1f3f60a6dc4339d7c.jpg"

const Right = () => {

    return(
        <div className="col-lg-3 right ms-5">
            <div className=" notification">
                <div className="notification-hot">
                    <div>
                        Thông báo 🔥
                    </div>
                </div>
                <div>
                    <Notification/>
                    {/*<Notification/>*/}
                    {/*<Notification/>*/}
                </div>
            </div>
            <Bottom_up/>
            <div className="sticky-footer mt-4">
                <div className="container my-auto d-flex">
                    <div className="copyright my-auto">
                        <span className="text-muted text-footer">Copyright &copy; Heavystone 2022</span>
                    </div>
                    {/*<div>*/}

                    {/*    <Button className="bg-white button-mess border-white"*/}
                    {/*        onClick={() => setOpen(!open)}*/}
                    {/*        aria-controls="example-collapse-text"*/}
                    {/*        aria-expanded={open}*/}
                    {/*    >*/}
                    {/*            <img className="ms-3" src={logo_message} width="35px"/>*/}
                    {/*    </Button>*/}
                    {/*    <Collapse in={open}>*/}
                    {/*        <div id="example-collapse-text">*/}
                    {/*            a*/}
                    {/*        </div>*/}
                    {/*    </Collapse>*/}

                    {/*</div>*/}
                </div>
            </div>
        </div>
    )

}
export default Right;