import React from "react";
import { Modal, Form } from "antd";

interface CreateFormProps {
  visible: boolean;
  onCancel: () => void;
}
const CreateForm: React.FC<CreateFormProps> = props => {
  const { visible, onCancel } = props;
  const [form] = Form.useForm();
  return (
    <Modal  onCancel={onCancel} visible={visible} title="新增PAGE_NAME_UPPER_CAMEL_CASE">
      <Form form={form} layout="vertical">

      </Form>
    </Modal>
  )
}

export default CreateForm;
