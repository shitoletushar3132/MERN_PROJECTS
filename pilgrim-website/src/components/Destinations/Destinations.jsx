import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import data from "../Data";
import { NavLink } from "react-router-dom";

function Destinations() {
  return (
    <div className="flex items-center justify-center h-full text-primary p-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {data.map(({ id, imageUrl, name, shortDescription, events }) => (
          <div className="" key={id}>
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia sx={{ height: 140 }} image={imageUrl} title={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>

                <Typography
                  variant="body1"
                  className="block"
                  color="text.primary"
                >
                  <strong>ShortDescription</strong>
                  <br />
                  <Typography
                    variant="body"
                    className="italic p-3"
                    color="text.secondary"
                  >
                    {shortDescription}
                  </Typography>
                </Typography>

                <Typography variant="body1" color="text.primary">
                  <strong>Events</strong>
                  {events.map(({ name, date }, id) => (
                    <Typography
                      key={id}
                      variant="body2"
                      className="p-3"
                      color="text.secondary"
                    >
                      <strong>{name}</strong> <br /> Occuring At - {date}
                    </Typography>
                  ))}
                </Typography>
              </CardContent>
              <CardActions>
                <NavLink key={id} to={`/${name}/${id}`}>
                  <Button size="small">
                    <strong className="text-lg">Get More INFO</strong>{" "}
                  </Button>
                </NavLink>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
