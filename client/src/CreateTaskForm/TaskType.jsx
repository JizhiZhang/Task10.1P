import React from 'react';
import { Header, Form, Checkbox } from 'semantic-ui-react';

function TaskType(props) {

  const type = props.type;

  // Event handler
  const handleChange = (e, { value }) => {
    props.onTaskTypeChange({name: 'type', value: value});
  }

  return (
    <div>
    <Header inverted block style={{background:"yellow", border:"yellow", color:"black"}}>New Requester Task&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;Worker Task</Header>
    <Form className='flex-form'>
      <Form.Field>
        Select Task Type:
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Choice Task'
          name='type'
          value='CHOICE'
          checked={type === 'CHOICE'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Decision-Making Task'
          name='type'
          value='DECISION'
          checked={type === 'DECISION'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label='Sentence-Level Task'
          name='type'
          value='SENTENCE'
          checked={type === 'SENTENCE'}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
    </div>
  );
}

export default TaskType;
