import { Dialog } from "primereact/dialog";

interface props {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

export default function MissingFeatureDialog({modalVisible, setModalVisible}: props) {
    return (
        <Dialog onHide={() => {setModalVisible(false)}} onShow={() => { }} visible={modalVisible} header="Sorry!">
            <p>Sorry! This feature has not yet been implemented.</p>
        </Dialog>
    );
};