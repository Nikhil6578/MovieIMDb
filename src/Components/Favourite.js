import React, { Component } from 'react'
import {movies} from './getMovie'

export default class  extends Component {
  constructor(){
    super();
    this.state={
      genere:[],
      currgen:'All Genres',
      movies:[]
    }
  }
  componentDidMount(){
    let genreids={28:'Action',12:'Adventure',16:'Animation',35:'Comdey',80:'Crime',53:'Thriller',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',
        27:'Horror',10402:'Miusic',9648:'Romance',878:'Sci-Fi',10770:'Tv',10752:'War',37:'Western'};
    let data=JSON.parse(localStorage.getItem("movies-app"||"[]"))
    let temp=[];
    data.forEach((movieObj)=>{
      if(!temp.includes(genreids[movieObj.genre_ids[0]])){
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    })
    temp.unshift('All Genres');
    this.setState({
      genere:[...temp],
      movies:[...data]
    })
  }
  handleGenreChange=(generes)=>{
    this.setState({
      currgen:generes
    })
  }
  render() {
    // const movie=movies.results;
    // console.log(movie);
    let genreids={28:'Action',12:'Adventure',16:'Animation',35:'Comdey',80:'Crime',53:'Thriller',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',
        27:'Horror',10402:'Miusic',9648:'Romance',878:'Sci-Fi',10770:'Tv',10752:'War',37:'Western'};
    
    
    // this.setState({
    //   genere:[...temp]
    // })
    // console.log(temp);
    return (
      <div>
        <>
        <div className="main">
            <div className="row">
            <div className="col-3">
            <ul className="list-group favourites-genres">
              {
               this.state.genere.map((generes)=>(
                this.state.currgen==generes?
                  <li className="list-group-item" style={{background:'#3f51b5',color:'white',fontWeight:'bold'}}>{generes}</li> :
                  <li className="list-group-item" style={{background:'white',color:'#3f51b5'}} onClick={()=>this.handleGenreChange(generes)}>{generes}</li>
                ))

              }
               
            </ul> 
            </div>
            <div className="col-9 favourites-table">
              <div className="row">
             <input type="text" className='input-group-text col' placeholder='Search'/>
             <input type="number" className='input-group-text col' placeholder='Rows Count'/>
             </div>
             <div className="row">
             <table className="table">
                       <thead>
                           <tr>
                          
                           <th scope="col">Title</th>
                              <th scope="col">Genre</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Rating</th>
                            <th scope="col"></th>
      
                             </tr>
                          </thead>
                         <tbody>
                          {
                            this.state.movies.map((movieObj)=>(
                              <tr>
                             <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{width:'5rem'}} alt={movieObj.title} /> </td>
                               <td>{movieObj.original_title}</td>
                               <td>{genreids[movieObj.genre_ids[0]]}</td>
                               <td>{movieObj.popularity}</td>
                               <td>{movieObj.vote_average}</td>
                               <td><button type="button" className="btn btn-danger">Delete</button></td>
                         </tr>

                            ))
                          }
                           
                          
                       </tbody>
                   </table>
                 </div>
                 <nav aria-label="Page navigation example">
                    <ul className="pagination">
                     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                   </nav>


            </div>
        </div>
        </div>
        </>
        
      </div>
    )
  }
}

