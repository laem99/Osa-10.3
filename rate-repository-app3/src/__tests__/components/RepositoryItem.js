import { render } from '@testing-library/react-native';
import React from 'react';
import { RepositoryListContainer } from "../../components/RepositoryList";

/* eslint-disable */
describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                    {
                        node: {
                            id: 'jaredpalmer.formik',
                            fullName: 'jaredpalmer/formik',
                            description: 'Build forms in React, without the tears',
                            language: 'TypeScript',
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars2.githubusercontent.com/u/4060187?v=4',
                        },
                        cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                    },
                    {
                        node: {
                            id: 'async-library.react-async',
                            fullName: 'async-library/react-async',
                            description: 'Flexible promise-based React data loader',
                            language: 'JavaScript',
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                'https://avatars1.githubusercontent.com/u/54310907?v=4',
                        },
                        cursor:
                            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                    },
                ],
            };

            const { getAllByTestId } = render(<RepositoryListContainer data={repositories} />);

            const names = getAllByTestId("repo_name");
            expect(names).toHaveLength(2);
            expect(names[0]).toHaveTextContent('jaredpalmer/formik');
            expect(names[1]).toHaveTextContent('async-library/react-async');

            const descs = getAllByTestId("repo_desc");
            expect(descs).toHaveLength(2);
            expect(descs[0]).toHaveTextContent("Build forms in React, without the tears");
            expect(descs[1]).toHaveTextContent("Flexible promise-based React data loader");

            const langs = getAllByTestId("repo_lang");
            expect(langs).toHaveLength(2);
            expect(langs[0]).toHaveTextContent("TypeScript");
            expect(langs[1]).toHaveTextContent("JavaScript");

            const counts = getAllByTestId("repo_count");
            expect(counts).toHaveLength(8);
            expect(counts[0]).toHaveTextContent("21.9k");
            expect(counts[1]).toHaveTextContent("1.6k");
            expect(counts[2]).toHaveTextContent("3");
            expect(counts[3]).toHaveTextContent("88");
            expect(counts[4]).toHaveTextContent("1.8k");
            expect(counts[5]).toHaveTextContent("69");
            expect(counts[6]).toHaveTextContent("3");
            expect(counts[7]).toHaveTextContent("72");
        });
    });
});