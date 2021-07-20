const columns = [
  {
    title: '题号',
    dataIndex: 'qid',
  },
  {
    title: '关联题目qid',
    // 插槽
    slots: {
      customRender: 'parent-id',
    },
  },
  {
    title: '题目',
    dataIndex: 'single_choice.title',
  },
];

export default columns;
