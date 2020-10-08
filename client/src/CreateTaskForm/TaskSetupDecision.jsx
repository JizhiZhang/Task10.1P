import React, { useState } from 'react';
import { Header, Form, TextArea } from 'semantic-ui-react';

function TaskSetupDecision(props) {

  // Set up potential responses
  const [question, setQuestion] = useState(
    props.type === 'DECISION' ? props.responses : {question: ''}
  );

  // Event handler
  const handleChange = (e, data) => {
    setQuestion({question: data.value});
    props.onTaskDetailsChange({name: 'responses', value: question});
  }

  return (
    <div>
      <Header inverted block style={{background:"yellow", border:"yellow", color:"black"}}>Decision Task</Header>
      <Form className='form-container'>
      <Form.Field>
          Please input a True/False question in the box.
        </Form.Field>
        <Form.Group inline>
          <Form.Field>
            <label className='label'>Question</label>
            <TextArea 
              name='question'
              placeholder='Enter the question' 
              value={question.question}
              style={{width: "480px"}}
              onChange={handleChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
      
    </div>
  );
}

export default TaskSetupDecision;
