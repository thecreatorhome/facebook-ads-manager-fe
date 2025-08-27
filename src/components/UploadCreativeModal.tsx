import { Modal, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "../styles/components/UploadCreativeModal.css";

interface UploadCreativeModalProps {
  isAdCreativeUploaderVisible: boolean;
  setAdCreativeUploaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setAdHeaderImage: React.Dispatch<React.SetStateAction<string>>;
  setAdBodyImage: React.Dispatch<React.SetStateAction<string>>;
}

const UploadCreativeModal = ({
  isAdCreativeUploaderVisible,
  setAdCreativeUploaderVisible,
  setAdHeaderImage,
  setAdBodyImage,
}: UploadCreativeModalProps) => {
  const handleCancel = () => {
    setAdCreativeUploaderVisible(false);
  };

  const handleOk = () => {
    setAdCreativeUploaderVisible(false);
  };

  // Convert File -> Base64
  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUploadChange = async (info: any) => {
    const fileList = info.fileList;

    // Example: Take first file as header image, second as body image
    if (fileList[0]) {
      const base64 = await getBase64(fileList[0].originFileObj);
      setAdHeaderImage(base64);
    }
    if (fileList[1]) {
      const base64 = await getBase64(fileList[1].originFileObj);
      setAdBodyImage(base64);
    }
  };

  return (
    <Modal
      className="uploadCreativeModal"
      open={isAdCreativeUploaderVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      // footer={null}
    >
      <div className="flexUploadCreativeModal">
        <div className="creativeOptions">
          <div className="campaignBoxTitle">Set up your creative</div>
          <div className="optionText"><i className="mediaOption" />Media</div>
        </div>
        <div className="creativeUpload">
          <div className="campaignBoxTitle">Media</div>
          <Upload
            listType="picture-card"
            beforeUpload={() => false} // prevent auto-upload
            multiple
            onChange={handleUploadChange}
            className="uploadHandlerOption"
          >
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </div>
      </div>

    </Modal>
  );
};

export default UploadCreativeModal;
