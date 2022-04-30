function enough(cap, on, wait) {
  if ((cap - on) >= wait){
    return 0
  }else if (cap - on < wait)
    return wait - (cap - on)
}
