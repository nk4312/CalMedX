var CBMedications = React.createClass({

  render: function() {

    var medicationList = this.props.medications.map(function(medication, index) {
      return (
        <div key={index} className="list-group-item">
          <dt>{medication.displayName}</dt>
          <dl className="pull-right">{medication.dateString}</dl>
          <dl>{medication.dosage}</dl>
        </div>
      );
    });

    return (

      <div className="panel panel-primary">

        <div className="panel-heading">
          <span className="icon-i-pharmacy"></span> 
          Medications
        </div>

        <div className="list-group">
          {medicationList}
        </div>

        <a href="#">
        <div className="panel-footer">
          <div className="text-center">
            Add <i className="fa fa-plus"></i>
          </div>
        </div>
        </a>

      </div>

    );
  }
});

