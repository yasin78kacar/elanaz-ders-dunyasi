export type RootStackParamList = {
  Home: undefined;
  TopicList: { dersId: string; dersBaslik: string };
  TopicFlow: { dersId: string; konuId: string; konuBaslik: string };
  StoryList: { dersId: string; dersBaslik: string };
  StoryFlow: { dersId: string; hikayeId: string; hikayeBaslik: string };
  ParentPin: undefined;
  ParentPanel: undefined;
};
