import React, { useState } from 'react';
import { Header, Form, TextArea } from 'semantic-ui-react';

function TaskSetupSentence(props) {

  // Set up potential responses
  const [question, setQuestion] = useState(
    props.type === 'SENTENCE' ? props.responses : {question: ''}
  );

  // Event handler
  const handleChange = (e, data) => {
    setQuestion({question: data.value});
    props.onTaskDetailsChange({name: 'responses', value: question});
  }

  return (
    <div>
      <Header inverted block style={{background:"yellow", border:"yellow", color:"black"}}>Sentence Task</Header>
      <Form className='form-container'>
      <Form.Field>
      Please provide a sentence to describe the problem.
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

export default TaskSetupSentence;
