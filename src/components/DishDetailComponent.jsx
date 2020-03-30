import React from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({image, name, description}) {   

    return (
        <Card>
            <CardImg width="100%" top src={image} alt={name} />
            <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
            </CardBody>
        </Card> 
)    

  
}
  
function RenderComments({id, comment, author, date}) {

    return (
        <ul key={id} className = "list-unstyled">
            <li className="text-left mb-3">{comment}</li>
            <li className="text-left mb-3">
                --{author}, 
                {new Intl.DateTimeFormat('en-US', 
                          { year: 'numeric', month: 'short', day: '2-digit'})
                                    .format(new Date(Date.parse(date))
                )}
            </li>
        </ul>
    )              
}

const  DishDetail = (props) => {    
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {RenderDish(props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {props.comments.map(comment => RenderComments(comment)) }  
            </div>
        </div>
        </div>
    );  
}

export default DishDetail;