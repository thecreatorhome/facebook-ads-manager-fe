import { Modal, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface UploadCreativeModalProps {
  isAdCreativeUploaderVisible: boolean;
  setAdCreativeUploaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadCreativeModal = ({
  isAdCreativeUploaderVisible,
  setAdCreativeUploaderVisible,
}: UploadCreativeModalProps) => {
  const handleCancel = () => {
    setAdCreativeUploaderVisible(false);
  };

  const handleOk = () => {
    setAdCreativeUploaderVisible(false);
  };

  return (
    <Modal
      title="Upload Creative Image"
      open={isAdCreativeUploaderVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      <Upload
        listType="picture-card"
        beforeUpload={() => false} // 👈 prevents auto-upload
        multiple
      >
        <div>
          <UploadOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
    </Modal>
  );
};

export default UploadCreativeModal;
