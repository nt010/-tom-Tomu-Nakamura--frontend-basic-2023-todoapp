import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import { MainPage } from "./index";
import { AlertManager } from "../../Organisms/AlertManager";

export default {component: MainPage};

export const Default = {
    decorators: [
        (Stoty) => (
            <div>
                <AlertHandlerProvider>
                    <AlertManager/>
                    <Stoty/>
                </AlertHandlerProvider>
            </div>
        )
    ]
};

