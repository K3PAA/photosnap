/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as StoriesRouteImport } from './routes/stories'
import { Route as PricingRouteImport } from './routes/pricing'
import { Route as FeaturesRouteImport } from './routes/features'
import { Route as IndexRouteImport } from './routes/index'

const StoriesRoute = StoriesRouteImport.update({
  id: '/stories',
  path: '/stories',
  getParentRoute: () => rootRouteImport,
} as any)
const PricingRoute = PricingRouteImport.update({
  id: '/pricing',
  path: '/pricing',
  getParentRoute: () => rootRouteImport,
} as any)
const FeaturesRoute = FeaturesRouteImport.update({
  id: '/features',
  path: '/features',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/features': typeof FeaturesRoute
  '/pricing': typeof PricingRoute
  '/stories': typeof StoriesRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/features': typeof FeaturesRoute
  '/pricing': typeof PricingRoute
  '/stories': typeof StoriesRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/features': typeof FeaturesRoute
  '/pricing': typeof PricingRoute
  '/stories': typeof StoriesRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/features' | '/pricing' | '/stories'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/features' | '/pricing' | '/stories'
  id: '__root__' | '/' | '/features' | '/pricing' | '/stories'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  FeaturesRoute: typeof FeaturesRoute
  PricingRoute: typeof PricingRoute
  StoriesRoute: typeof StoriesRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/stories': {
      id: '/stories'
      path: '/stories'
      fullPath: '/stories'
      preLoaderRoute: typeof StoriesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/features': {
      id: '/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof FeaturesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  FeaturesRoute: FeaturesRoute,
  PricingRoute: PricingRoute,
  StoriesRoute: StoriesRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
