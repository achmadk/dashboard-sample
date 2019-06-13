import React, { PureComponent } from 'react'

export class RootComponent extends PureComponent {
  state = {
    store: null,
    persistor: null,
    components: null
  }
  async componentDidMount () {
    try {
      const [
        { store, persistor },
        { Provider },
        { PersistGate },
        { SnackbarProvider },
        { default: ScrollToTop },
        { default: RouteComponents }
      ] = await Promise.all([
        import(/* webpackChunkName: "store", webpackPreload: true */
        '@/shared-state/store'),
        import(/* webpackChunkName: "react-redux", webpackPreload: true */ 'react-redux'),
        import(/* webpackChunkName: "persist-gate", webpackPreload: true */ 'redux-persist/integration/react'),
        import('notistack'),
        import('@/components/scroll-to-top'),
        import('@/routes')
      ])
      this.setState({
        store,
        persistor,
        components: {
          Provider,
          PersistGate,
          SnackbarProvider,
          ScrollToTop,
          RouteComponents
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  snackbarProps = {
    maxSnack: 1,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    options: {
      variant: 'error'
    }
  }
  render () {
    const { store, persistor, components } = this.state
    if (store && persistor && components) {
      const {
        Provider,
        PersistGate,
        SnackbarProvider,
        ScrollToTop,
        RouteComponents
      } = components
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider {...this.snackbarProps}>
              <ScrollToTop>
                <RouteComponents />
              </ScrollToTop>
            </SnackbarProvider>
          </PersistGate>
        </Provider>
      )
    }
    return 'loading...'
  }
}

export default RootComponent
