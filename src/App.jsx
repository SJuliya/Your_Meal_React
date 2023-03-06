import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Catalog} from "./components/Catalog/Catalog";
import {Provider} from "react-redux";
import {store} from "./store";
import {ModalDelivery} from "./components/ModalDelivery/ModalDelivery";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <main>
                <Navigation />
                <Catalog />
            </main>
            <Footer />
            <ModalDelivery />
        </Provider>
    )
}