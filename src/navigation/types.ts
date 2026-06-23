export type RootStackParamList = {
  Home: undefined;
  TopicList: { dersId: string; dersBaslik: string };
  TopicFlow: { dersId: string; konuId: string; konuBaslik: string };
  StoryList: { dersId: string; dersBaslik: string };
  StoryFlow: { dersId: string; hikayeId: string; hikayeBaslik: string };
  AudioStoryList: { dersId: string; dersBaslik: string };
  AudioStoryPlayer: { dersId: string; hikayeId: string; hikayeBaslik: string };
  ReadingBookList: { dersId: string; dersBaslik: string };
  ReadingBookFlow: { dersId: string; kitapId: string; kitapBaslik: string };
  ParentPin: undefined;
  ParentPanel: undefined;
};
