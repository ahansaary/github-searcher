import {useSelector} from 'react-redux'
import {GithubApiResponse} from 'src/models/github-api-response.model'
import {GithubIssue} from 'src/models/github-issue.model'
import {GithubRepository} from 'src/models/github-repository.model'
import {GithubUser} from 'src/models/github-user.model'
import {AppState} from '..'
import {SearchType} from './types'

export const useGithubUsersSelector = (query: string) =>
  useSelector<AppState, GithubApiResponse<GithubUser> | null>(
    state => state.github.users[query]
  )

export const useGithubRepositoriesSelector = (query: string) =>
  useSelector<AppState, GithubApiResponse<GithubRepository> | null>(
    state => state.github.repositories[query]
  )

export const useGithubIssuesSelector = (query: string) =>
  useSelector<AppState, GithubApiResponse<GithubIssue> | null>(
    state => state.github.issues[query]
  )

export const useGithubSearchTypeSelector = () =>
  useSelector<AppState, SearchType>(state => state.github.type)

export const useGithubSearchQuerySelector = () =>
  useSelector<AppState, string>(state => state.github.query)

export const useGithubIsLoadingSelector = () =>
  useSelector<AppState, boolean>(state => state.github.isLoading)

export const useGithubErrorSelector = () =>
  useSelector<AppState, string | null>(state => state.github.error)
