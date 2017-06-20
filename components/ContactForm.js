var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm form-inline'},
        React.createElement('input', {
          className:'form-control mb-2 mr-sm-2 mb-sm-0',
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          className:'form-control mb-2 mr-sm-2 mb-sm-0',
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('div', {className:'input-group mb-2 mr-sm-2 mb-sm-0'},
          React.createElement('div', {className: 'input-group-addon'}, "@"),
          React.createElement('input', {
            className:'form-control',
            type: 'email',
            placeholder: 'Email',
            value: this.props.contact.email},              
          ),
         ), 
        React.createElement('button', {className: 'btn btn-primary', type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
})