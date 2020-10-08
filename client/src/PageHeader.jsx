import React from 'react';
import { Container, Segment, Menu,Button } from 'semantic-ui-react'

function PageHeader() {
  return (
    <div>
        <Segment
          inverted
          textAlign='center'
          vertical
        >
        <Menu
          inverted
          pointing
          secondary
          size='large'
        >
          <Container>
            <Menu.Item>
              <h3><a href="/">iCrowdTask</a></h3>
            </Menu.Item>
            <Menu.Item>
              <h4>How it works</h4>
            </Menu.Item>
            <Menu.Item>
              <h4><a href="/create">Requesters</a></h4>
            </Menu.Item>
            <Menu.Item>
              <h4>Workers</h4>
            </Menu.Item>
            <Menu.Item>
              <h4>Pricing</h4>
            </Menu.Item>
            <Menu.Item>
              <h4>About</h4>
            </Menu.Item>
            <Menu.Item position='right'>
            <a href="https://infinite-hollows-91372.herokuapp.com/" target="_blank"><Button>Sign in</Button></a>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </div>
  );
}

export default PageHeader;
