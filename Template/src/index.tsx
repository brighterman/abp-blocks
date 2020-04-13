import React, { useRef, useState } from 'react';
import { connect,Dispatch } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ModalState } from './model';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { PAGE_NAME_UPPER_CAMEL_CASEDto } from './data.d';
import { PlusOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Menu, Dropdown } from 'antd';
import { queryPAGE_NAME_UPPER_CAMEL_CASEs } from './service';
import CreateForm from './components/createForm';
import UpdateForm from './components/updateForm';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  PAGE_NAME_UPPER_CAMEL_CASEs?: PAGE_NAME_UPPER_CAMEL_CASEDto[];
  dispatch?: Dispatch
}

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({ dispatch }) => {
  const actionRef = useRef<ActionType>();
  const [createModalVisible, handleCreateModalVisible] = useState<boolean>(false);
  const reloadTable = () => {
    actionRef.current!.reload();
  }
  const columns: ProColumns<PAGE_NAME_UPPER_CAMEL_CASEDto>[] = [
    {
      title: "操作",
      render: (_, record) =>
        <Dropdown
          overlay={
            <Menu
              selectedKeys={[]}
            >
            </Menu>
          }
        >
          <Button type="primary">
            <SettingOutlined /> 操作 <DownOutlined />
          </Button>
        </Dropdown>

    },
    {
      title: "显示名称",
      dataIndex: 'displayName',
    },
  ]
  return (
    <>
      <ProTable<PAGE_NAME_UPPER_CAMEL_CASEDto>
        headerTitle="PAGE_NAME_UPPER_CAMEL_CASE"
        actionRef={actionRef}
        search={false}
        rowKey="id"
        toolBarRender={() => [
          <Button onClick={() => handleCreateModalVisible(true)} icon={<PlusOutlined />} type="primary" >
            新增
          </Button>
        ]}
        request={async () => {
          const response = await queryPAGE_NAME_UPPER_CAMEL_CASEs();
          const data = response.items;
          return {
            data,
            success: true,
            total: data.totalCount,
          }
        }}
        columns={columns}
      />
      <CreateForm
      visible={createModalVisible}
      onCancel={() => handleCreateModalVisible(false)} />
      <UpdateForm
      visible={createModalVisible}
      onCancel={() => handleCreateModalVisible(false)} />
    </>)
}
export default connect(
  ({
    BLOCK_NAME_CAMEL_CASE: { PAGE_NAME_UPPER_CAMEL_CASEs },
    loading,
  }: {
    BLOCK_NAME_CAMEL_CASE: ModalState;
    loading: {
      effects: {
        [key: string]: boolean;
      };
    };
  }) => ({
    PAGE_NAME_UPPER_CAMEL_CASEs,
  }),
)(PAGE_NAME_UPPER_CAMEL_CASE);



