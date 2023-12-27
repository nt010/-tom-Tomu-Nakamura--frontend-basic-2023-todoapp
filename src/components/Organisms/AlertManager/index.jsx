import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

export const AlertManager = () => {
    //Contextを取得
    const AlertHandlerContext = useAlertHandlerContext();

    //AlertHandlerContextから直接値が取り出せる
    console.log(AlertHandlerContext.visible);
    // AlertHandlerContext.setAlert("message"); //Alertの表示

    return (
        <Alert
          isActive={AlertHandlerContext.visible}
        />
    )
}



