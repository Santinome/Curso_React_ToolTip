import TooltipText from './tooltip/TooltipText';

function App() {
  return (
    <>
      <p>
        <TooltipText tooltip={'Texto generado'}>Lorem ipsum</TooltipText> dolor
        sit amet, consectetur adipiscing elit. Vestibulum vel lacus mattis,
        accumsan sapien nec, dictum quam. Curabitur a libero mi. Morbi blandit
        ipsum sed luctus malesuada. Proin vehicula consectetur urna, ut feugiat
        ligula. Nullam consectetur est ex, eget tincidunt lorem malesuada in.
        Aliquam viverra lectus eros, vitae malesuada nulla finibus vitae. In
        aliquet luctus elit eget fermentum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        pellentesque metus non elit tincidunt euismod. Mauris convallis quis
        mauris quis fermentum. Vestibulum vestibulum molestie orci, a consequat
        ligula. Nullam lobortis luctus tortor ac varius. Nulla vitae magna nec
        purus aliquam ultricies sed sit amet nibh. Etiam interdum congue augue,
        at volutpat orci congue quis. Fusce rhoncus ante sit amet justo aliquam,
        ut vestibulum mi pharetra. Praesent dui dolor, pellentesque vitae semper
        nec, laoreet eget augue. Praesent consequat et magna at semper. Nullam
        quis faucibus nunc.
      </p>
      <p>
        Aliquam eu auctor nibh, eget pulvinar velit. Suspendisse rhoncus quis
        felis ullamcorper congue. Sed ut risus viverra, tempor purus non,
        malesuada sem.{' '}
        <TooltipText tooltip={'Soy un tooltip'}>
          Nunc sagittis dictum sem eget hendrerit
        </TooltipText>
        . Morbi rhoncus faucibus leo ut pulvinar. Morbi hendrerit nulla arcu,
        nec dignissim odio auctor nec. Suspendisse tempor lorem non nisl
        scelerisque laoreet. Nullam varius, erat id tincidunt blandit, ante est
        condimentum odio, tincidunt consectetur ex enim ut nulla. Nullam
        fringilla mattis nunc, a accumsan nibh imperdiet eu.
      </p>
    </>
  );
}

export default App;
