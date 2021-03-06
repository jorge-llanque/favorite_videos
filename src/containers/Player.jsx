import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

function Player(props) {

  const { id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  //   <video controls autoPlay></video>
  //   <source src={props.playing.source} type='video/mp4' />
  return hasPlaying ? (
    <div className='Player'>
      <iframe width='1280' height='720' src={props.playing.source} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) :
    <Redirect to='404' />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
