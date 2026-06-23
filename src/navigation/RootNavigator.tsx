import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { TopicListScreen } from '../screens/TopicListScreen';
import { TopicFlowScreen } from '../screens/TopicFlowScreen';
import { StoryListScreen } from '../screens/StoryListScreen';
import { StoryFlowScreen } from '../screens/StoryFlowScreen';
import { AudioStoryListScreen } from '../screens/AudioStoryListScreen';
import { AudioStoryPlayerScreen } from '../screens/AudioStoryPlayerScreen';
import { ReadingBookListScreen } from '../screens/ReadingBookListScreen';
import { ReadingBookFlowScreen } from '../screens/ReadingBookFlowScreen';
import { ParentPinScreen } from '../screens/ParentPinScreen';
import { ParentDashboard } from '../screens/ParentDashboard';
import { VideoCatalogScreen } from '../screens/VideoListScreen';
import { VideoListScreen } from '../screens/VideoListScreen';
import { uygulamaBasligi } from '../config/appConfig';
import { useTheme } from '../contexts/ThemeContext';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { colors, isDark } = useTheme();

  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.arkaPlan,
      card: colors.arkaPlan,
      text: colors.baslik,
      border: colors.kenarlik,
      primary: colors.birincil,
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.arkaPlan },
          headerTintColor: colors.baslik,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: colors.arkaPlan },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: uygulamaBasligi() }}
        />
        <Stack.Screen name="TopicList" component={TopicListScreen} />
        <Stack.Screen name="TopicFlow" component={TopicFlowScreen} />
        <Stack.Screen name="StoryList" component={StoryListScreen} />
        <Stack.Screen name="StoryFlow" component={StoryFlowScreen} />
        <Stack.Screen name="AudioStoryList" component={AudioStoryListScreen} />
        <Stack.Screen name="AudioStoryPlayer" component={AudioStoryPlayerScreen} />
        <Stack.Screen name="ReadingBookList" component={ReadingBookListScreen} />
        <Stack.Screen name="ReadingBookFlow" component={ReadingBookFlowScreen} />
        <Stack.Screen
          name="ParentPin"
          component={ParentPinScreen}
          options={{ title: 'Anne Paneli' }}
        />
        <Stack.Screen
          name="ParentDashboard"
          component={ParentDashboard}
          options={{ title: 'Anne Paneli' }}
        />
        <Stack.Screen
          name="VideoCatalog"
          component={VideoCatalogScreen}
          options={{ title: 'Videolar' }}
        />
        <Stack.Screen name="VideoList" component={VideoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
