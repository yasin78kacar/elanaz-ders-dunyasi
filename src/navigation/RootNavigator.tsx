import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { TopicListScreen } from '../screens/TopicListScreen';
import { TopicFlowScreen } from '../screens/TopicFlowScreen';
import { StoryListScreen } from '../screens/StoryListScreen';
import { StoryFlowScreen } from '../screens/StoryFlowScreen';
import { ParentPinScreen } from '../screens/ParentPinScreen';
import { ParentPanelScreen } from '../screens/ParentPanelScreen';
import { uygulamaBasligi } from '../config/appConfig';
import { colors } from '../theme/colors';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="ParentPin"
          component={ParentPinScreen}
          options={{ title: 'Anne Paneli' }}
        />
        <Stack.Screen
          name="ParentPanel"
          component={ParentPanelScreen}
          options={{ title: 'Anne Paneli' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
