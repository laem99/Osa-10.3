import React from 'react';
import { render, fireEvent, act } from "@testing-library/react-native";
import { SignInContainer } from '../../components/SignIn';

/* eslint-disable */
describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const onSubmit = jest.fn();
            const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
            await act(async () => {
                await fireEvent.changeText(getByTestId('usernameField'), "kalle");
            });
            await act(async () => {
                await fireEvent.changeText(getByTestId('passwordField'), "password");
            });
            await act(async () => {
                await fireEvent.press(getByTestId('submit_form'));
            });

            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual({
                username: "kalle",
                password: "password",
            });
        });
    });
});