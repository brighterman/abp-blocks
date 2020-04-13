import React from 'react';
import {  connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { ModalState } from './model';
import { PAGE_NAME_UPPER_CAMEL_CASEDto } from './data.d';


interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  PAGE_NAME_UPPER_CAMEL_CASEs?: PAGE_NAME_UPPER_CAMEL_CASEDto[];
  dispatch?: Dispatch
}

const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({ dispatch }) => {
  return (
    <PageHeaderWrapper>

    </PageHeaderWrapper>)
}
export default connect(
  ({
    BLOCK_NAME_CAMEL_CASE: { PAGE_NAME_UPPER_CAMEL_CASEs},
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



