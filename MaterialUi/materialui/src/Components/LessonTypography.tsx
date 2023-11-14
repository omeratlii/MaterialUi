import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        vero architecto, obcaecati facere, sit exercitationem impedit corporis
        vitae eveniet magni eius, esse maiores natus dolore facilis! Molestiae
        repellat repudiandae sint!
      </Typography>
      <Typography variant="body2">
        Body2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
        vero architecto, obcaecati facere, sit exercitationem impedit corporis
        vitae eveniet magni eius, esse maiores natus dolore facilis! Molestiae
        repellat repudiandae sint!
      </Typography>

      <Typography variant="h1">h1 Görünümü</Typography>
      <Typography variant="h2">h2 Görünümü</Typography>
      <Typography variant="h3">h3 Görünümü</Typography>
      <Typography variant="h4">h4 Görünümü</Typography>
      <Typography variant="h5">h5 Görünümü</Typography>

      {/* özellik olarak h1 etiketinin özelliğini alsın fakat html'de h4 olarak gözüksün istersek aşağıdaki gibi bir kullanım
    h1 ile aynı görünüme sahip olacak fakat h4 etiketi içerisinde yazılacak. componentin amacı bu. */}
      <Typography variant="h1" component="h4"> h1 gibi gözüken h4</Typography>


      <Typography variant="h6" component="h4" align="left"> Sol</Typography>
      <Typography variant="h6" component="h4" align="right"> Sağ</Typography>


      <Typography variant="subtitle1">alt başlık 1</Typography>
      <Typography variant="subtitle2">alt başlık 2</Typography>
    </div>
  );
};
