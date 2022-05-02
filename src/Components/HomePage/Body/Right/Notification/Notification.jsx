import React from "react";
import "../Notification/Notification.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";

const Notification = () => {

    return (
        // <div className="notic">
        //     <div className="notification-title">
        //         Thông báo nghỉ lễ 30/4 - 1/5 và Giỗ tổ Hùng Vương
        //     </div>
        //     <div className="notification-sub-title text-muted mb-1">
        //         Ngày Giỗ tổ Hùng Vương: sinh viên được nghỉ 3 ngày liên tục, từ .....
        //     </div>
        // </div>
        <div className="border shadow-sm mt-2 p-1 rounded-3 justify-content-between">
            <div className="notification-title">
                Thông báo nghỉ  Giỗ tổ Hùng Vương
            </div>
            <div className="notification-sub-title text-muted mb-1">
                Ngày Giỗ tổ Hùng Vương: sinh viên được nghỉ 3 ngày liên tục, từ .....
            </div>
        </div>


    )

}
export default Notification;