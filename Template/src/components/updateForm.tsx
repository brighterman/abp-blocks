import React from "react";
import { Modal, Form } from "antd";

interface UpdateFormProps {
  visible: boolean;
  onCancel: () => void;
}
const UpdateForm: React.FC<UpdateFormProps> = props => {
  const { visible, onCancel } = props;
  const [form] = Form.useForm();
  return (
    <Modal  onCancel={onCancel} visible={visible} title="修改PAGE_NAME_UPPER_CAMEL_CASE">
      <Form form={form} layout="vertical">

      </Form>
    </Modal>
  )
}

export default UpdateForm;
