import React, { PureComponent, createRef } from 'react'
import { withRouter } from 'react-router-dom'

// import SidenavButton from '@/components/button/sidenav'

class SidenavContent extends PureComponent {
  constructor (props) {
    super(props)
    this.nav = createRef()
    this.state = {
      menuItems: null
    }
  }

  async componentDidMount () {
    try {
      const menuItems = await this.loadMenuItems()
      this.setState({ menuItems })
    } catch (e) {
      console.log('error: ', e)
    }
    const $nav = $(this.nav.current)
    $nav.slimscroll({
      height: '100%'
    })
    // Append icon to submenu
    $nav
      .find('.prepend-icon')
      .prepend('<i class="material-icons">keyboard_arrow_right</i>')

    // AccordionNav
    const slideTime = 250
    const $lists = $nav.find('ul').parent('li')
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>')
    const $As = $lists.children('a')

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault())

    // Accordion nav
    $nav.on('click', e => {
      const { target } = e
      const $parentLi = $(target).closest('li') // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return // return if doesn't click on li
      const $subUl = $parentLi.children('ul')

      // let depth = $subUl.parents().length // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true
        }
        return false
      })
      allAtDepth
        .slideUp(slideTime)
        .closest('li')
        .removeClass('open')

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open')
      }
      $subUl.stop().slideToggle(slideTime)
    })

    // HighlightActiveItems
    const { history } = this.props
    const $links = $nav.find('a')
    const currentLocation = history.location
    function highlightActive (pathname) {
      $links.each((_, link) => {
        const $li = $(link).parent('li')
        const href = $li.prevObject.attr('href')

        if ($li.hasClass('active')) {
          $li.removeClass('active')
        }
        if (pathname === href) {
          $li.addClass('active')
        }
      })
    }
    highlightActive(currentLocation.pathname)
    history.listen(location => {
      highlightActive(location.pathname)
    })
  }

  async loadMenuItems () {
    try {
      const [
        { menuItems },
        { default: SidenavButton },
        { default: SidenavItemChildren }
      ] = await Promise.all([
        import(/* webpackChunkName: "menu-items", webpackPrefetch: true */ './menu-items'),
        import(/* webpackChunkName: "sidenav-button", webpackPrefetch: true */ '@/components/button/sidenav'),
        import('./sidenav-item-children')
      ])
      return menuItems.map((item, id) => (
        <li key={`menu-item-${id}`}>
          <SidenavButton {...item} />
          {item?.children?.length > 0 && (
            <SidenavItemChildren items={item.children} />
          )}
        </li>
      ))
    } catch (e) {
      console.log('error: ', e)
    }
  }

  render () {
    return (
      <ul className='nav' ref={this.nav}>
        {this.state.menuItems}
      </ul>
    )
  }
}

export default withRouter(SidenavContent)
