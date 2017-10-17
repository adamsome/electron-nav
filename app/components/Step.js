// @flow
import React from 'react'
import { Popup, Container, Label, Breadcrumb, Header } from 'semantic-ui-react'
import styles from './Step.css'

type Props = {
  name: string,
  breadcrumb: Array<string>,
  createdBy: string,
  createdAt: string,
  createdAtDisplay: string,
  scripts: Array<{ name: string, logs: string}>,
  comments: string,
}

type CrumbsProps = {
  crumbs: Array<string>,
}

const Crumbs = ({ crumbs }: CrumbsProps) => (
  <Breadcrumb size="large">
    {crumbs.map((crumb, i) => {
      const last = i === crumbs.length - 1
      return (
        <span key={crumb}>
          <Breadcrumb.Section link={!last} active={last}>
            {crumb}
          </Breadcrumb.Section>
          {!last ? <Breadcrumb.Divider icon="right chevron" /> : null}
        </span>
      )
    })}
  </Breadcrumb>
)

const Step = ({
  name,
  breadcrumb,
  createdBy,
  createdAt,
  createdAtDisplay,
  scripts,
  comments,
}: Props) => (
  <div className={styles.container}>
    <Header as="h1">
      {name}
      <a className={`${styles.headerLabel} ${styles.createdBy}`}>
        {createdBy}
      </a>
      <Popup
        trigger={
          <div className={`${styles.headerLabel} ${styles.createdAt}`} alt="test">
            {createdAtDisplay}
          </div>
        }
        content={createdAt}
        on="hover"
      />
    </Header>
    <Crumbs crumbs={breadcrumb} />
    <Container className={styles.comments}>
      {comments} <a className={styles.commentsEdit}>EDIT</a>
    </Container>
  </div>
)

export default Step
