import React, { useRef } from 'react';
import styled from 'styled-components/native';
import { Transition, Transitioning } from 'react-native-reanimated';

// import { Home, Category, Cart, Account, } from './Images';
import { View } from 'react-native';

const activeColor = '#e46845'
const bgactiveColor = '#FAE1DA'

const Container = styled.TouchableWithoutFeedback``;

const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.focused ? bgactiveColor : '#fff'};
  border-radius: 100px;
  margin: 5px 15px;
`;
const Label = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-left: 8px;
  font-family:'HelveticaNeueMedium';
`;

function TabComponents({ icon, label, accessibilityState, onPress }) {
  const focused = accessibilityState.selected;
  const Icons = icon;
  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}>
        <View>
          <Icons focused={focused} color={focused ? activeColor : '#3f3f40'} />
        </View>
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default TabComponents;